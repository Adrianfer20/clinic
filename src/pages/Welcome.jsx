

export function Welcome() {
  return (
    <>
        <header className="flex flex-col justify-center gap-2">
            <h1 className="text-4xl sm:text-6xl font-black uppercase">
              ¡Bienvenido!
            </h1>
            <div className="max-w-5xl grid gap-2">
            <p className="text-justify md:text-start tracking-wide leading-loose opacity-90">
              Estamos encantados de presentarte nuestra plataforma intuitiva y
              segura diseñada para facilitar la gestión de información médica de
              manera eficiente y confiable. Con nuestra herramienta, podrás
              acceder y actualizar los registros de los pacientes de manera
              rápida y sencilla, garantizando la privacidad y confidencialidad
              de los datos.
            </p>
            <p className="text-justify md:text-start tracking-wide leading-loose opacity-90">
              ¡Explora todas las funcionalidades que ofrecemos y descubre cómo
              simplificar la gestión de datos médicos con la aplicación web de
              la Clínica Monsanto!
            </p>
            </div>
        </header>
    </>
  );
}
