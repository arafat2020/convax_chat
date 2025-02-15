"use client"
import React, { useState } from 'react';
import { useUserLocal } from './UserContext';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { upload } from '@/action/upload';
import { createServer } from '@/action/createServer';
import { Id } from '@/convex/_generated/dataModel';
import { useModal } from '@/app/_hooks/useModal';
import { Loader2 } from 'lucide-react';

function CreateServer() {
    const { profileId } = useUserLocal();
    const { reset } = useModal()
    const [serverName, setServerName] = useState<string>('');
    const [serverImage, setServerImage] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const { toast } = useToast()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setLoading(true)
        try {
            if (!serverName || !serverImage) {
                toast({
                    title: "Bad request",
                    description: "All required field must be given"
                })
                return
            }
            const url = await upload(serverImage)
            if (!url.url) {
                console.log(url);
                return
            }
            try {
                await createServer({
                    profileId: profileId as Id<"userProfile">,
                    serverImage: url.url,
                    serverName
                })
                reset()
            } catch (error) {
                toast({
                    title: "Something went wrong",
                    description: `Error: ${error}`
                })
            }
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: `Error: ${error}`
            })
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full h-auto py-2 flex flex-col space-y-3">
            <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2">
                <Label htmlFor="serverName">Server Name</Label>
                <Input
                    required
                    id="serverName"
                    type="text"
                    placeholder="Server Name"
                    value={serverName}  // Controlled input
                    onChange={(e) => setServerName(e.target.value)} // Update state
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2">
                <Label htmlFor="serverImage">Server Image</Label>
                <Input
                    required
                    id="serverImage"
                    type="file"
                    onChange={(e) => {
                        if (e.target.files) {
                            setServerImage(e.target.files[0]);  // Update state with the selected file
                        }
                    }}
                />
            </div>
            <Button disabled={loading} variant="secondary" type="submit">
                {loading ? <Loader2 className='animate-spin w-6 h-6' /> : "Create Server"}
            </Button>
        </form>
    );
}

export default CreateServer;
