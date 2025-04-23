"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle authentication
    console.log("Form submitted:", formData)

    // For demo purposes, redirect to dashboard
    window.location.href = "/"
  }

  return (
    <div className="w-full max-w-md">
      <Link href="/" className="mb-4 flex items-center text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
          <CardDescription>
            {isLogin ? "Enter your credentials to access your account" : "Create an account to get started"}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">
                  Forgot password?
                </Link>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              {isLogin ? "Login" : "Sign Up"}
            </Button>

            <div className="text-center text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button type="button" className="text-blue-600 hover:underline" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Login"}
              </button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
