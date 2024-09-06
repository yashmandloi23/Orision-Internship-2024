"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast , ToastContainer } from "react-toast"
// import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

export default function Component() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e : any) => {
    e.preventDefault()
    
    const payload = { name, email, message }

    try {
      await axios.post("/api/contact", payload)
      toast.success("Message sent successfully!")
      // Clear form fields if needed
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="dark:bg-background dark:text-card-foreground">
   
      <Card className="max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Fill out the form below and we&lsquo;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Enter your message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
      <ToastContainer />
    </div>
  )
}
