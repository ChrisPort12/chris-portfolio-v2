
import { useState, useEffect } from 'react'

// Tipos permitidos para el sistema de temas
export type Theme = 'light' | 'dark' | 'system'

type ResolvedTheme = 'light' | 'dark'

// Constantes de configuración
const STORAGE_KEY = 'chris-dev-theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

// Recuperar la preferencia guardada
function getInitialTheme(): Theme {
    try {
        const savedTheme = localStorage.getItem(STORAGE_KEY)

        if (
            savedTheme === 'light' ||
            savedTheme === 'dark' ||
            savedTheme === 'system'
        ) {
            return savedTheme
        }
    } catch (error) {
        console.warn('Unable to read theme preference:', error)
    }

    return 'system'
}

// Hook personalizado para administrar la apariencia
export function useTheme() {

    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    // Guardar la preferencia del visitante
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch (error) {
            console.warn('Unable to save theme preference:', error)
        }
    }, [theme])

    // Sincronizar el tema con el documento HTML
    useEffect(() => {

        const mediaQuery = window.matchMedia(MEDIA_QUERY)

        function applyTheme(resolvedTheme: ResolvedTheme) {
            document.documentElement.dataset.theme = resolvedTheme
        }

        if (theme === 'system') {

            applyTheme(mediaQuery.matches ? 'dark' : 'light')

            function handleSystemChange(event: MediaQueryListEvent) {
                applyTheme(event.matches ? 'dark' : 'light')
            }

            mediaQuery.addEventListener('change', handleSystemChange)

            // Limpiar el evento cuando deje de ser necesario
            return () => {
                mediaQuery.removeEventListener(
                    'change',
                    handleSystemChange
                )
            }
        }

        applyTheme(theme)

    }, [theme])

    // Exponer el estado y su función de actualización
    return {
        theme,
        setTheme,
    }
}