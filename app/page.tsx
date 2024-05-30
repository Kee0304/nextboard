import axios from "axios";
import { redirect } from "next/navigation";


export default async function Home() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user`
    )
    if (response.data.statusCode === 200) {
      console.log('유저 확인')
    }
  } catch {
    redirect('/auth/signin');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
    </main>
  );
}
