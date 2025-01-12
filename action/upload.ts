"use server"

import { api } from "@/convex/_generated/api"
import { fetchMutation, fetchQuery } from "convex/nextjs"

export async function upload(file:File) {
    const url = await fetchMutation(api.upload.generateUploadUrl)
    const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await result.json();
      return fetchQuery(api.upload.getFileUrl,{storageId})
}