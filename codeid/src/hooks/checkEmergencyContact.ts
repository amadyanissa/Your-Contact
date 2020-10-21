import { useSelector } from "react-redux";

export default function useCheckEmergencyContact(id) {
  const emergency = useSelector((state) => state.allReducers.emergency);
  let wished = false;
  emergency.map((el) => {
    if (el.contacts.id == id) {
      wished = true;
    }
  });
  return { wished };
}