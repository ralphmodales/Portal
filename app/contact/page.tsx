import Link from 'next/link'
import { Wifi, Bug, Lock, HelpCircle, MessageSquare, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <main className="flex-1 min-h-screen bg-white">
      <section className="w-full py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900">
              Contact Support
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Wifi className="w-12 h-12 mb-4 text-red-500" />
                  <span className="text-lg font-semibold text-center text-gray-900">
                    Website Down
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-gray-600 mb-4">
                  Report and check the status of our website
                </p>
                <Button variant="outline" className="w-full">
                  Check Status
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Bug className="w-12 h-12 mb-4 text-orange-500" />
                  <span className="text-lg font-semibold text-center text-gray-900">
                    Report a Bug
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-gray-600 mb-4">
                  Help us improve by reporting any issues
                </p>
                <Button variant="outline" className="w-full">
                  Submit Report
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Lock className="w-12 h-12 mb-4 text-green-500" />
                  <span className="text-lg font-semibold text-center text-gray-900">
                    Password Recovery
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-gray-600 mb-4">
                  Reset your forgotten password
                </p>
                <Button variant="outline" className="w-full">
                  Reset Password
                </Button>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Need More Help?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 flex items-center justify-center mr-4 bg-blue-100 rounded-full">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
                  <p className="text-sm text-gray-600">Find answers to common questions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className="w-12 h-12 flex items-center justify-center mr-4 bg-purple-100 rounded-full">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                  <p className="text-sm text-gray-600">Get in touch with our support team</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Experiencing Input Errors?</h3>
            <p className="text-gray-600 mb-6">
              If you're encountering issues with incorrect inputs or form submissions, please visit our dedicated troubleshooting page for step-by-step guidance.
            </p>
            <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-100">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Troubleshoot Input Errors
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}




