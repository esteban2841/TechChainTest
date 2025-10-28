// src/components/organisms/ContactForm.tsx
import React, { useCallback, useMemo, useState } from 'react'
import Swal from 'sweetalert2'
import { Container } from '../atoms/Container'
import { Heading } from '../atoms/Heading'
import { FormField } from '../molecules/FormField'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { emailLooksValid, tokens, cx } from '../../utils/ui'
import { useEmailJsLead } from '../../hooks/useEmailJsLead'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState<{ name: boolean; email: boolean }>({ name: false, email: false })
  const { loading, sendLead } = useEmailJsLead()

  const errors = useMemo(() => {
    const e: { name?: string; email?: string } = {}
    if (!name.trim()) e.name = 'Name is required'
    if (!email.trim()) e.email = 'Email is required'
    else if (!emailLooksValid(email)) e.email = 'Enter a valid email'
    return e
  }, [name, email])

  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true })

    if (Object.keys(errors).length > 0) {
      await Swal.fire({
        title: 'Please correct the highlighted fields',
        text: 'Some fields contain errors or are empty.',
        icon: 'error',
        confirmButtonColor: '#000',
      })
      return
    }

    const res = await sendLead({ name, email })

    if (res.ok) {
      await Swal.fire({
        title: 'Message sent!',
        text: "Thanks! We'll be in touch soon.",
        icon: 'success',
        confirmButtonColor: '#000',
      })
      setName('')
      setEmail('')
      setTouched({ name: false, email: false })
    } else {
      await Swal.fire({
        title: 'Could not send your message',
        text: 'Please try again in a moment.',
        icon: 'warning',
        confirmButtonColor: '#000',
      })
    }
  }, [errors, name, email, sendLead])

  return (
    <section id='contact' className='bg-white'>
      <Container className='py-16 sm:py-24'>
        <Heading level={2} className='text-center'>Contact Us</Heading>
        <form
          onSubmit={onSubmit}
          noValidate
          className={cx(tokens.card, tokens.radius, 'mt-8 p-6 max-w-xl mx-auto space-y-4')}
        >
          <FormField label='Name' htmlFor='name' error={touched.name ? errors.name : undefined}>
            <Input id='name' name='name' value={name} onChange={setName} placeholder='Jane Doe' required ariaLabel='Name' />
          </FormField>

          <FormField label='Email' htmlFor='email' error={touched.email ? errors.email : undefined}>
            <Input id='email' name='email' type='email' value={email} onChange={setEmail} placeholder='jane@example.com' required ariaLabel='Email' />
          </FormField>

          <div className='flex items-center justify-center'>
            <Button type='submit' label={loading ? 'Sending...' : 'Submit'} />
          </div>
        </form>
      </Container>
    </section>
  )
}