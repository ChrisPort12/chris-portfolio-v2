
import { Sun, Moon, Monitor } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

// Propiedades que recibirá nuestro componente
interface ThemeSwitcherProps {
    theme: Theme
    onThemeChange: (theme: Theme) => void
}

// Opciones disponibles de apariencia
const themeOptions = [
    {
        value: 'light',
        label: 'Light mode',
        icon: Sun,
    },
    {
        value: 'dark',
        label: 'Dark mode',
        icon: Moon,
    },
    {
        value: 'system',
        label: 'System mode',
        icon: Monitor,
    },
] as const

export function ThemeSwitcher({
    theme,
    onThemeChange,
}: ThemeSwitcherProps) {

    return (
        <div
            role="group"
            aria-label="Color theme"
            className="inline-flex items-center gap-1 rounded-full
                       border border-border bg-background p-1"
        >

            {/* Generar las opciones de apariencia */}
            {themeOptions.map(({ value, label, icon: Icon }) => {

                const isActive = theme === value

                return (
                    <button
                        key={value}
                        type="button"
                        title={label}
                        aria-label={label}
                        aria-pressed={isActive}
                        onClick={() => onThemeChange(value)}
                        className={`flex size-11 items-center
                            justify-center rounded-full
                            transition-colors duration-200
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-accent
                            ${
                                isActive
                                    ? 'bg-accent-soft text-accent'
                                    : 'text-muted hover:bg-surface hover:text-foreground'
                            }`}
                    >
                        <Icon
                            size={18}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />
                    </button>
                )
            })}

        </div>
    )
}
