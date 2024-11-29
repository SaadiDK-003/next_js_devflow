import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  // console.log(session?.user);
  return (
    <>
      <h1 className="mt-5 text-center text-3xl font-bold text-primary-500">
        Assalam-o-Alikum, Welcome {session?.user?.name ?? "User"}.
      </h1>
      {session?.user ? (
        <form
          className="px-10 py-[100px]"
          action={async () => {
            "use server";
            await signOut({
              redirectTo: ROUTES.SIGN_IN,
            });
          }}
        >
          <Button type="submit">Log Out</Button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
