import { useDispatch } from "react-redux";
import { useLazyGetUserQuery } from "../../app/services/userAPi";
import { setPersonalDetails } from "../../app/persists/userSlice";
import { useEffect, useState } from "react";

//Hook function for setting the account static detail in the redux, which will be persist and revoked during logout
export default function useUser() {
  const dispatch = useDispatch(); //for using the function in in userSlice[redux]

  const [count, setCount] = useState(0); // State, which will help in treggering the getUser/useLazyGetUserQuery
  const [getUser, { data, isSuccess }] = useLazyGetUserQuery(); //destructuring the useLazyGetuserQuery and getting the, its data once loaded.

  //Once count's state change the use Effect will be triggered
  // 1. getUser() is triggered, and expecting to return a json to data
  // 2. assigning the array from the data of user to userDetail, once the error occured the data will be empty thus assigning a empty array.
  // 3. Once, user detail has been assigned with data the listingOwner will have a key-value array that will suffice the parameter for the function from userSlice.
  // 4. using dispatch to use the function from userSlice called setPersonaDetail for setting the value in state in userSlice using dispatch.
  useEffect(() => {
    getUser();
    const listingOwner = data
      ? {
          id: data?.user?.id,
          firstname: data?.user?.first_name,
          lastname: data?.user?.last_name,
          email: data?.user?.email,
          image: data?.user?.photo,
          phone: data?.user?.contact,
          address: data?.user?.street,
          country: data?.user?.country,
          country_state: data?.user?.state_province,
          zip: data?.user?.zip,
          city: data?.user?.city,
          viber: data?.user?.viber_number,
          whats_app: data?.user?.whatsapp_number,
          is_subscribed: data?.is_subscribed,
          payment_details: data?.payment_details,
          plan_details: data?.plan_details,
        }
      : {};

    dispatch(setPersonalDetails(listingOwner));
  }, [count]);

  const setUser = () => {
    setCount(1);
  };

  return { setUser, isSuccess };
}
