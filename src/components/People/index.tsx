import { Grid, Post } from '@botspot/ui';
import { FC } from 'react';
import { WP_REST_API_Post } from 'wp-types';
import { getFeaturedImageUrl } from '../../utils/getFeaturedImageUrl';

export type PeopleProps = {
  people: WP_REST_API_Post[];
};
export const People: FC<PeopleProps> = ({ people }) => {
  // const [data, setData] = useState<WP_REST_API_Post[]>();

  // useEffect(() => {
  //   getPeople().then(({ data }) => {
  //     setData(data);
  //   });
  // }, []);

  return (
    <Grid spacing={{ lg: 5, md: 3, xs: 2 }} xs={12} container>
      {people?.map((post) => (
        <Grid key={post.id} lg={4} md={6} xs={12} item>
          <Post
            excerpt={post.excerpt.rendered}
            featuredImage={getFeaturedImageUrl(post)}
            title={post.title.rendered}
          />
        </Grid>
      ))}
    </Grid>
  );
};
