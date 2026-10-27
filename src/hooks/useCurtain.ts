"use client"

import { useCallback, useRef, useState } from "react"

interface UseCurtainOptions {
  /** Durasi fase "tutup" tirai (ms). Default 200 */
  closeDuration?: number
  /** Durasi fase "buka" tirai (ms). Default 300 */
  openDuration?: number
  /** Arah tirai: 'vertical' (dari atas-bawah) atau 'horizontal' (dari kiri-kanan). Default 'vertical' */
  direction?: "vertical" | "horizontal"
}

interface UseCurtainReturn<T> {
  /** State aktif yang sudah di-commit (dipakai untuk render) */
  current: T
  /** Trigger pergantian ke value baru dengan efek curtain */
  transition: (next: T) => void
  /** Kelas CSS untuk container: atur overflow-hidden di sini */
  containerClass: string
  /** Style inline untuk elemen tirai (curtain overlay) */
  curtainStyle: React.CSSProperties
  /** Apakah sedang dalam fase animasi */
  isTransitioning: boolean
}

/**
 * useCurtain — menganimasikan pergantian konten dengan efek "tirai":
 * konten lama ditutup oleh tirai → konten baru diset → tirai dibuka.
 *
 * @example
 * const { current, transition, curtainStyle, containerClass } = useCurtain(activeStep, {
 *   direction: "vertical",
 *   closeDuration: 180,
 *   openDuration: 280,
 * })
 *
 * // Di JSX:
 * <div className={containerClass} style={{ position: "relative" }}>
 *   {renderContent(current)}
 *   <div style={curtainStyle} /> {/* tirai overlay *\/}
 * </div>
 */
export function useCurtain<T>(
  initialValue: T,
  options: UseCurtainOptions = {}
): UseCurtainReturn<T> {
  const { closeDuration = 200, openDuration = 300, direction = "vertical" } = options

  const [current, setCurrent] = useState<T>(initialValue)
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("idle")
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const transition = useCallback(
    (next: T) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      // Fase 1: tutup tirai
      setPhase("closing")

      timeoutRef.current = setTimeout(() => {
        // Fase 2: swap konten saat tirai tertutup penuh
        setCurrent(next)
        setPhase("opening")

        timeoutRef.current = setTimeout(() => {
          // Fase 3: tirai dibuka, idle kembali
          setPhase("idle")
        }, openDuration)
      }, closeDuration)
    },
    [closeDuration, openDuration]
  )

  // Kalkulasi style tirai berdasarkan phase & direction
  const isVertical = direction === "horizontal"
  const curtainStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 10,
    backgroundColor: "#121212", // warna tirai — sesuaikan dengan bg section
    backdropFilter: "blur(4px)",
    borderRadius: "inherit",
    transformOrigin: isVertical ? "top center" : "left center",
    transform:
      phase === "idle"
        ? isVertical ? "scaleY(0)" : "scaleX(0)"
        : phase === "closing"
        ? isVertical ? "scaleY(1)" : "scaleX(1)"
        : isVertical ? "scaleY(0)" : "scaleX(0)",
    transition:
      phase === "closing"
        ? `transform ${closeDuration}ms cubic-bezier(0.4,0,0.2,1)`
        : phase === "opening"
        ? `transform ${openDuration}ms cubic-bezier(0.4,0,0.2,1)`
        : "none",
  }

  const curtainTransformOrigin =
    phase === "opening"
      ? isVertical ? "bottom center" : "right center"
      : isVertical ? "top center" : "left center"

  curtainStyle.transformOrigin = curtainTransformOrigin

  return {
    current,
    transition,
    containerClass: "relative overflow-hidden",
    curtainStyle,
    isTransitioning: phase !== "idle",
  }
}

