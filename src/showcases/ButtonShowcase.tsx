import React from 'react'

import { Button, ButtonProps, Typography } from '../../lib/main'
import cn from '../../lib/tools/cn'

type ButtonVariant = ButtonProps['variant']

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.623 5.623a7.25 7.25 0 1 0 10.253 10.254A7.25 7.25 0 0 0 5.623 5.623Zm-1.06 11.314a8.75 8.75 0 1 1 12.882-.553l5.149 5.15-1.06 1.06-5.15-5.149a8.75 8.75 0 0 1-11.821-.508Z"
      clipRule="evenodd"
    />
  </svg>
)

const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.13 3.87a3.58 3.58 0 0 0-5.05 0L3.44 15.51l-.49 5.54 5.54-.49L20.13 8.92a3.58 3.58 0 0 0 0-5.05ZM7.81 19.12l-3.21.29.29-3.21 8.99-9.01 2.93 2.93-9 9ZM19.07 7.86l-1.21 1.21-2.93-2.93 1.21-1.21a2.07 2.07 0 0 1 2.93 0c.81.81.81 2.12 0 2.93Z"
    />
  </svg>
)

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.89 3.85V1.89h-1.5v1.96H7.61V1.89h-1.5v1.96H2.13v18.39h14.03l5.7-5.7V3.85h-3.98.01ZM6.11 5.35v1.29h1.5V5.35h8.78v1.29h1.5V5.35h2.48v2.87H3.63V5.35h2.48ZM3.63 9.72h16.73v4.62h-6.4v6.4H3.63V9.72Zm11.91 11.02h-.07v-4.9h4.9v.07l-4.83 4.83Z"
    />
  </svg>
)

const variants: Record<string, ButtonVariant[]> = {
  basic: [
    'solid',
    'outline',
    'outline-soft',
    'plain',
    'solid-inverted',
    'negative-solid',
    'negative-plain',
  ],
  link: ['link', 'link-inverted'],
  iconWrapped: ['icon-wrapped', 'icon-wrapped-negative-margin'],
}

type ButtonExample = {
  size?: 'responsive' | 'large' | 'small'
  children?: string
  isDisabled?: boolean
  isLoading?: boolean
  loadingText?: string
  isIconOnly?: boolean
  hasStartIcon?: boolean
  hasEndIcon?: boolean
}

const basicButtonExamples: Record<string, ButtonExample[]> = {
  'size-default': [
    { children: 'Default' },
    { isDisabled: true, children: 'Disabled' },
    { isIconOnly: true },
    { hasStartIcon: true, children: 'Start icon' },
    { hasEndIcon: true, children: 'End icon' },
    { hasStartIcon: true, hasEndIcon: true, children: 'Both icons' },
    { isLoading: true, loadingText: 'Loading…' },
  ],
  'size-small': [
    { size: 'small', children: 'Small' },
    { size: 'small', isDisabled: true, children: 'Small disabled' },
    { size: 'small', isIconOnly: true },
    { size: 'small', hasStartIcon: true, children: 'Start icon' },
    { size: 'small', hasEndIcon: true, children: 'End icon' },
    { size: 'small', hasStartIcon: true, hasEndIcon: true, children: 'Both icons' },
    { size: 'small', isLoading: true, loadingText: 'Loading…' },
  ],
}

const Stack = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      'flex flex-wrap items-end gap-2 rounded-lg border border-dashed border-gray-800 p-4',
      className,
    )}
  >
    {children}
  </div>
)

const StackableButton = ({
  variant,
  buttonExample,
}: {
  variant: ButtonVariant
  buttonExample: ButtonExample
}) => {
  if (buttonExample.isIconOnly) {
    return (
      <Button
        variant={variant}
        icon={<SearchIcon />}
        aria-label="Search"
        size={buttonExample.size}
        isDisabled={buttonExample.isDisabled}
        isLoading={buttonExample.isLoading}
      />
    )
  }

  return (
    <Button
      variant={variant}
      size={buttonExample.size}
      isDisabled={buttonExample.isDisabled}
      isLoading={buttonExample.isLoading}
      loadingText={buttonExample.loadingText}
      startIcon={buttonExample.hasStartIcon ? <SearchIcon /> : undefined}
      endIcon={buttonExample.hasEndIcon ? <EditIcon /> : undefined}
    >
      {buttonExample.children}
    </Button>
  )
}

const ButtonShowcase: React.FC = () => (
  <div className="flex flex-col gap-6">
    <Typography variant="h2">Button</Typography>

    <div className="flex flex-col gap-1 text-sm text-gray-700">
      <p>
        Link buttons show an end icon by default (ArrowRight for internal links, Export for external
        links, ArrowDown for anchors). Use{' '}
        <code className="rounded bg-gray-200 px-1">hasLinkIcon={'{false}'}</code> to hide it.
      </p>
      <p>
        Icon Button should use <code className="rounded bg-gray-200 px-1">icon</code> and{' '}
        <code className="rounded bg-gray-200 px-1">aria-label</code> props instead of{' '}
        <code className="rounded bg-gray-200 px-1">children</code>.
      </p>
      <p>
        &quot;Naked&quot; icon buttons should use{' '}
        <code className="rounded bg-gray-200 px-1">icon-wrapped</code> or{' '}
        <code className="rounded bg-gray-200 px-1">icon-wrapped-negative-margin</code> variants.
      </p>
    </div>

    {variants.basic.map((variant) => (
      <div key={variant} className="flex flex-col gap-2">
        <Typography variant="h4">variant=&quot;{variant}&quot;</Typography>
        <Stack
          className={cn({
            'bg-background-passive-inverted-base': variant === 'solid-inverted',
          })}
        >
          {basicButtonExamples['size-default'].map((buttonExample, index) => (
            <StackableButton key={index} variant={variant} buttonExample={buttonExample} />
          ))}
          <div className="w-full" aria-hidden />
          {basicButtonExamples['size-small'].map((buttonExample, index) => (
            <StackableButton key={index} variant={variant} buttonExample={buttonExample} />
          ))}
        </Stack>
      </div>
    ))}

    <div className="flex flex-col gap-2">
      <Typography variant="h4">variant=&quot;unstyled&quot;</Typography>
      <Stack>
        <Button variant="unstyled">Unstyled</Button>
        <Button variant="unstyled" size="small">
          Small
        </Button>
        <Button variant="unstyled" isDisabled>
          Disabled
        </Button>
      </Stack>
    </div>

    {variants.link.map((variant) => (
      <div key={variant} className="flex flex-col gap-2">
        <Typography variant="h4">variant=&quot;{variant}&quot;</Typography>
        <Stack>
          <Button variant={variant} href="#">
            Link
          </Button>
          <Button variant={variant} href="#" size="small">
            Link small
          </Button>
          <Button variant={variant} href="https://bratislava.sk">
            External link
          </Button>
          <Button variant={variant} href="https://bratislava.sk" size="small">
            External small
          </Button>
          <Button variant={variant} href="#anchor">
            Anchor link
          </Button>
          <Button variant={variant} href="#anchor" size="small">
            Anchor small
          </Button>
        </Stack>
      </div>
    ))}

    {variants.iconWrapped.map((variant) => (
      <div key={variant} className="flex flex-col gap-2">
        <Typography variant="h4">variant=&quot;{variant}&quot;</Typography>
        <Stack>
          <Button variant={variant} icon={<CalendarIcon />} aria-label="Calendar" />
          <Button variant={variant} icon={<CalendarIcon />} aria-label="Calendar" size="small" />
        </Stack>
      </div>
    ))}
  </div>
)

export default ButtonShowcase
