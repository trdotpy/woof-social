import { getProviders, signIn } from 'next-auth/react'
import { BsGoogle } from 'react-icons/bs'

export default function SignIn({ providers }) {
  return (
    <div className="bg-gray-900">
      <div className="flex h-screen justify-center">
        <img
          alt="landing background"
          src="https://images.pexels.com/photos/7683642/pexels-photo-7683642.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <div className="mx-auto flex w-full max-w-md items-center px-6 brightness-125 lg:w-3/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-center text-4xl font-bold text-gray-300">
                Woof - The First Social Network for Dogs 🐶
              </h2>

              <p className="mt-3 text-gray-400">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-6">
              {Object.values(providers).map((provider) => (
                <div key={provider.name} className="my-6 space-y-4">
                  <button
                    className="flex w-full items-center justify-center space-x-4 rounded-md bg-green-600 p-4 hover:brightness-125"
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  >
                    <BsGoogle className="h-6 w-6 text-gray-200" />

                    <p className="font-medium text-gray-100">
                      Login with Google
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
