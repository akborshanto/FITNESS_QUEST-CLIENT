import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const ProfileModal = ({ handleUpdate, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {" "}
      <Button
        onClick={onOpen}
        className="w-full  px-4 p-2 rounded-full md:text-sm text-xs border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
      >
        Update Profile
      </Button>
      <div className="p-4">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-black">   
            
            <div className=" my-6">
            <h1 className="lg:text-4xl md:text-3xl text-2xl text-center text-black uppercase">
             Profile
              <span className="text-[#007BFF]"> Update</span>
            </h1>
          </div></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
        
              <form onSubmit={handleUpdate}>
                <div className="relative my-6">

                

                  <input
                    id="id-b02"
                    type="text"
                    name="name"
                    placeholder="your name"
                    className="input input-bordered   file-input-accent w-full max-w-xs text-black"
                    defaultValue={user?.displayName}
                  />
                  <label
                    htmlFor="id-b02"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Your name
                  </label>
                </div>

                <div className="relative my-6">
                  <input
                    id="id-b02"
                    type="file"
                    name="photo"
                    placeholder={user?.photoURL}
                    className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                  />
               
                </div>
                <button
                  type="submit"
                  className="w-full  px-4 p-2 rounded-full md:text-sm text-xs border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
                >
                  Update
                </button>
                <Button
                  colorScheme=""
                  mr={3}
                  onClick={onClose}
                  className=" w-full my-4 rounded-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Close
                </Button>
              </form>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileModal;
