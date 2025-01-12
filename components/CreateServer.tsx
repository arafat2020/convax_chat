"use client"
import React, { useState } from 'react';
import { useUserLocal } from './UserContext';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { upload } from '@/action/upload';
import { createServer } from '@/action/createServer';

function CreateServer() {
    const { profileId } = useUserLocal();

    const [serverName, setServerName] = useState<string>('');
    const [serverImage, setServerImage] = useState<File | null>(null);
    const { toast } = useToast()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (!serverName || !serverImage) {
            toast({
                title: "Bad request",
                description:"All required field must be given"
            })
            return
        }
        const url = await upload(serverImage)
        if (!url) {
            console.log(url);
            return
        }
        await createServer(serverName, url)
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
            <Button variant="secondary" type="submit">
                Create Server
            </Button>
        </form>
    );
}

export default CreateServer;
