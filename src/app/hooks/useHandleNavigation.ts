
import { useRouter, useSearchParams } from "next/navigation";


const useHandleNavigation = () => {
      const searchParams: URLSearchParams = useSearchParams();
      
  const router = useRouter();

  const handleOpenSelect = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(name, value);

    //   setIsOpen(false)
    router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  return { handleOpenSelect };
};

export default useHandleNavigation;
