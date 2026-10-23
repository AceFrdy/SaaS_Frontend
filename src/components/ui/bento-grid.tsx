import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRight as ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded",
      // light styles
      "bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-card transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4 sm:p-6">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-10 w-10 origin-left transform-gpu text-primary-2 dark:text-emerald-400 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-white mt-2">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-1">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden mt-3"
        )}
      >
        <Button variant="link" size="sm" className="pointer-events-auto p-0 text-primary-2 dark:text-emerald-400 hover:text-primary-3 dark:hover:text-primary-3 font-semibold text-xs sm:text-sm" render={<a href={href} />} nativeButton={false}>{cta}<ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" /></Button>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 sm:p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <Button variant="link" size="sm" className="pointer-events-auto p-0 text-primary-2 dark:text-emerald-400 hover:text-primary-3 dark:hover:text-primary-3 font-semibold text-xs sm:text-sm" render={<a href={href} />} nativeButton={false}>{cta}<ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" /></Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-white/5" />
  </div>
)

export { BentoCard, BentoGrid }
