"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, GitFork, Book, Users, Rocket, Star, Code } from "lucide-react"
import { useTheme } from "next-themes"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { decrement, increment, selectCounter } from "@/lib/features/counter/counter.slice"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 mr-2" />
          <span className="font-bold">next-startup</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Thank You for Using Our Starter Kit!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your journey to building amazing applications starts here. Let's explore what's next!
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-2xl font-semibold">
                  {counter}
                </div>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-gray-300" onClick={() => dispatch(increment())}>
                    +
                  </button>
                  <button className="px-4 py-2 bg-gray-300" onClick={() => dispatch(decrement())}>
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Resources</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <GitFork className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">GitHub Repository</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">Explore the source code and contribute</p>
                <Link className="text-blue-500 hover:underline" href="https://github.com/yourusername/your-repo">
                  View on GitHub
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Book className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Documentation</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">Comprehensive guides and API references</p>
                <Link className="text-blue-500 hover:underline" href="/docs">
                  Read the Docs
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">Join discussions and get help</p>
                <Link className="text-blue-500 hover:underline" href="https://discord.gg/your-community">
                  Join Discord
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="next-steps" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Next Steps</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Star className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Customize Your App</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Tailor the starter kit to fit your project's unique needs
                </p>
                <Link className="text-blue-500 hover:underline" href="/docs/customization">
                  Customization Guide
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Code className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Build Features</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Start adding new features to your application
                </p>
                <Link className="text-blue-500 hover:underline" href="/docs/tutorials">
                  Feature Tutorials
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 next-startup. All rights and lefts reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}