import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { toast } from "sonner";

const uploadFile = async (file: File | null): Promise<string> => {
    if (!file) {
        throw new Error("NO FILE WAS GIVEN");
    }

    const uniqueFileName = `${file.name}_${Date.now()}`
    const storageRef = ref(storage, uniqueFileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                toast('Upload is ' + progress + '% done')
                switch (snapshot.state) {
                    case 'paused':
                        toast("Upload is paused", )
                        break;
                    case 'running':
                        toast("Upload is running")
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                reject(error);
                toast("File upload failed", )
            },
            async () => {
                // Handle successful uploads on complete
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log('File available at', downloadURL);
                    toast("File uploaded successfully!")
                    resolve(downloadURL);
                } catch (error) {
                    reject(error);
                }
            }
        );
    });
};

export default uploadFile;
