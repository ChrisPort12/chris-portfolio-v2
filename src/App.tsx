
import { useTheme } from './hooks/useTheme'
import { ThemeSwitcher } from './components/ThemeSwitcher'

function App() {

    // Administrar el estado de apariencia
    const { theme, setTheme } = useTheme()

    return (
        <main className="flex min-h-screen items-center justify-center bg-background p-6">

            {/* Tarjeta de presentación */}
            <section className="w-full max-w-xl rounded-bento border border-border bg-surface p-6 shadow-sm sm:p-10">

                {/* Encabezado y selector de apariencia */}
                <div className="flex flex-wrap items-center justify-between gap-4">

                    <p className="font-code text-xs font-medium text-accent">
                        PORTFOLIO 2.0
                    </p>

                    <ThemeSwitcher
                        theme={theme}
                        onThemeChange={setTheme}
                    />

                </div>

                <p className="mt-6 font-code text-xs font-medium text-muted">
                    MODERN BENTO EDITION
                </p>

                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    chris<span className="text-accent">.dev</span>
                </h1>

                <h2 className="mt-4 text-xl font-semibold text-foreground">
                    Christian Pinal Cordero
                </h2>

                <p className="mt-2 text-muted">
                    Java Full Stack Developer Jr.
                </p>

                <p className="mt-6 text-muted">
                    Simple by design. Powerful by code.
                </p>

                {/* Tecnologías del proyecto */}
                <div className="mt-8 flex flex-wrap gap-2">

                    <span className="rounded-full bg-accent-soft px-4 py-2 text-sm text-accent">
                        React
                    </span>

                    <span className="rounded-full bg-accent-soft px-4 py-2 text-sm text-accent">
                        TypeScript
                    </span>

                    <span className="rounded-full bg-accent-soft px-4 py-2 text-sm text-accent">
                        Tailwind CSS
                    </span>

                </div>

            </section>

        </main>
    )
}

export default App