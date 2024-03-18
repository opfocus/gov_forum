// Utilized for testing login with intercepted routes and Parallel routes in Next.js.

import Login from "@/ui/login";
import Modal from "@/ui/modal";

export default function Page() {
  return (
    <Modal>
      <Login />
    </Modal>
  );
}
