'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const formSchema = z.object({
    name: z.string().min(1, { message: 'Nama harus diisi' }),
    email: z.string().email({ message: 'Email tidak valid' }),
    message: z.string().min(1, { message: 'Pesan harus diisi' })
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {}
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="h-12 rounded-[4px] border-none bg-gray-400/20 px-4 py-2 dark:bg-gray-600/20"
                                                    placeholder="Nama"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="h-12 rounded-[4px] border-none bg-gray-400/20 px-4 py-2 dark:bg-gray-600/20"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className="h-[120px] rounded-[4px] border-none bg-gray-400/20 px-4 py-2 dark:bg-gray-600/20"
                                                placeholder="Pesan"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="text-base-light h-12 w-full bg-blue-600 px-10 py-3 hover:bg-blue-700 lg:w-[160px]"
                            variant="secondary"
                        >
                            Kirim Pesan
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default ContactForm
