import React, { PropsWithChildren } from "react";

export default function PhoenixSVGContainer({ children, background = "#0b0f14" }: PropsWithChildren<{ background?: string }>) {
    const PHOENIX_PATH =
        "M512 80c41 0 79 11 114 33 44 28 79 69 98 118 6 15 23 22 38 16 29-11 62-14 95-2 43 15 73 47 87 91 14 45 6 91-21 130-11 16-7 37 9 49 44 32 71 84 71 140 0 98-75 176-170 181-20 1-34 19-31 38 4 23 5 47 2 72-9 78-58 138-133 164-75 27-153 14-219-36-13-10-31-10-44 0-66 50-144 63-219 36-76-26-124-86-133-164-3-25-2-49 2-72 3-19-11-37-31-38-95-5-170-83-170-181 0-56 27-108 71-140 16-12 20-33 9-49-27-39-35-85-21-130 14-44 44-76 87-91 33-12 66-9 95 2 15 6 32-1 38-16 19-49 54-90 98-118 35-22 73-33 114-33zm0 100c-108 0-196 88-196 196s88 196 196 196 196-88 196-196S620 180 512 180zm-265 477c24 0 44 20 44 44s-20 44-44 44-44-20-44-44 20-44 44-44zm530 0c24 0 44 20 44 44s-20 44-44 44-44-20-44-44 20-44 44-44z";


    return (
        <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", background, display: "block", borderRadius: 24 }}
        >
            <defs>
                <clipPath id="phoenix-clip">
                    <path d={PHOENIX_PATH} />
                </clipPath>
            </defs>
            <foreignObject width="100%" height="100%" clipPath="url(#phoenix-clip)">
                <div style={{ width: "100%", height: "100%", display: "block" }}>{children}</div>
            </foreignObject>
        </svg>
    );
}