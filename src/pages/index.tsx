import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  interface GetImagesParam {
    pageParam?: string;
  }

  interface ImageData {
    title: string;
    description: string;
    url: string;
    ts: number;
    id: string;
  }

  interface PageData {
    data: {
      data:ImageData[]
    };
    after?: string;
  }

  const getImages = async ({
    pageParam = null,
  }: GetImagesParam): Promise<PageData> => {
    const response = await api.get('/api/images', {
      params: {
        after: pageParam
      }
    });
    return response;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM ok
    getImages,
    // TODO GET AND RETURN NEXT PAGE PARAM ok
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.after) {
          return lastPage.after;
        }
        return null;
      },
    }
  );

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY ok
    if(data?.pages) {
      let newData = data.pages.map(page => page.data.data).flat()
      return newData
    }
  }, [data]);

  // TODO RENDER LOADING SCREEN ok
  isLoading ?? <Loading/>

  // TODO RENDER ERROR SCREEN ok
  isError ?? <Error />

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
