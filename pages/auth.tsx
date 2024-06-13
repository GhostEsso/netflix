import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-65">
        <nav className="px-12 py-5">
          <img src="/images/logo.svg" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Connectez-vous" : "Inscrivez-vous"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  onChange={(ev: any) => setName(ev.target.value)}
                  value={name}
                  label="Nom d'Utilisateur"
                />
              )}

              <Input
                id="email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                value={email}
                label="Email"
                type="email"
              />
              <Input
                id="password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                value={password}
                label="Mot de passe"
                type="password"
              />
            </div>
            <button className="bg-blue-600 py-3 text-white rounded-md w-full mt-10 hover:bg-blue-700 transition">
              {variant === 'login' ? 'Se connecter' : 'Créer un compte'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'Première fois chez Freeya?' : 'Avez-vous déjà un compte?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Créer un compte' : 'Se connecter'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
