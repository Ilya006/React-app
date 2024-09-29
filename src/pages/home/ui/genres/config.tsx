import { GenresEnum } from '~/shared/config/genre';
import { pathKeys } from '~/shared/lib/react-router';
import { Icon } from '~/shared/ui/icon';

export const genresList = [
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Comedy }),
    icon: <Icon name='genres/comedy' />,
    title: 'Комендии'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Anime }),
    icon: <Icon name='genres/anime' />,
    title: 'Анимэ'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Crime }),
    icon: <Icon name='genres/crime' />,
    title: 'Криминал'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Detective }),
    icon: <Icon name='genres/detective' />,
    title: 'Детективы'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Drama }),
    icon: <Icon name='genres/drama' />,
    title: 'драмы'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Fantasy }),
    icon: <Icon name='genres/fantasy' /> ,
    title: 'Фантастика'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Horror }),
    icon: <Icon name='genres/horror' />,
    title: 'Ужасы'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Kids }),
    icon: <Icon name='genres/kids' />,
    title: 'Детям'
  },
  {
    href: pathKeys.catalog.byCategory({ genre: GenresEnum.Romance }),
    icon: <Icon name='genres/romance' />,
    title: 'Мелодраммы'
  }
]