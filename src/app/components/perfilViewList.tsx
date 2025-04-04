import { PerfilView, PerfilViewProps } from './perfilView';

// Interface for the list component
interface PerfilViewListProps {
  list: PerfilViewProps[];
  title?: string;
  subtitle?: string;
}

/**
 * Componente para mostrar una lista de perfiles.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {PerfilViewProps[]} props.list - Array de perfiles a mostrar.
 * @param {string} [props.title] - Título opcional para la sección.
 * @param {string} [props.subtitle] - Subtítulo opcional para la sección.
 * @returns {JSX.Element} El elemento de la lista de perfiles renderizado.
 */

export const PerfilViewList = ({
  list,
  title = 'Meet our leadership',
  subtitle = "We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
}: PerfilViewListProps): JSX.Element => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">{subtitle}</p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {list.map((profile, index) => (
            <li key={index}>
              <PerfilView
                alt={profile.alt}
                src={profile.src}
                perfilName={profile.perfilName}
                description={profile.description}
                rol={profile.rol}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
