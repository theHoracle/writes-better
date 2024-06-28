import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "./firebase";
import { toast } from "sonner";
import { error } from "console";

const uploadFile = async (file: File | undefined) => {
  if(file) {
    const uniqueFileName = `${file.name}_${Date.now()}`;
    const storageRef = ref(storage, uniqueFileName);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          toast("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              toast("Upload is paused");
              break;
              case "running":
                toast("Upload is running");
                break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              reject(error);
              toast("File upload failed");
            },
            async () => {
              // Handle successful uploads on complete
              try {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                const imageRef = ref(storage, downloadURL);
                toast("File uploaded successfully!", {
                  action: {
                    label: "Undo",
                    onClick: () => {
                      deleteObject(imageRef)
                      .then(() => {
                        toast("Undo successful.");
                      })
                      .catch((error) => {
                        toast("An error occured");
                      });
                    },
                  },
                });
                resolve(downloadURL);
              } catch (error) {
                reject(error);
                console.log("Upload file error: ", error)
              }
            },
          );
        });
      }
    };

export default uploadFile;
