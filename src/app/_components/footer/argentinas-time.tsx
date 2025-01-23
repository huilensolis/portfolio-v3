'use client'

import { useEffect, useState } from "react";

export function ArgentinasTime() {
    const [argentinasTime, setArgentinasTime] = useState(() => {
        return new Date().toLocaleString("en-US", {
            timeZone: "America/Buenos_Aires",
            hour: "2-digit",
            hour12: false,
            hourCycle: "h24",
            minute: "2-digit",
        })
    })


    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTime = new Date().toLocaleString("en-US", {
                timeZone: "America/Buenos_Aires",
                hour: "2-digit",
                hour12: false,
                hourCycle: "h24",
                minute: "2-digit",
            })


            setArgentinasTime(updatedTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <>{argentinasTime}</>
}
