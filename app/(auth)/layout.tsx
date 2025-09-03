import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication - BrightCity',
  description: 'Login and register for BrightCity services',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20">
      <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <div className="text-2xl font-bold">BrightCity</div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                "BrightCity has transformed how I manage my home services. Everything is so convenient and reliable!"
              </p>
              <footer className="text-sm">Sofia Davis, Homeowner</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
