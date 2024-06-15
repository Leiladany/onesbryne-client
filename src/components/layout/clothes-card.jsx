import { Link } from 'react-router-dom';
import { Card, CardCover, CardOverflow, Typography } from '@mui/joy';

export const ClothesCard = ({ product }) => {
  return (
    <Link to={`/clothes/${product.type.toLowerCase()}/${product.id}`}>
      <Card
        sx={{
          background: 'transparent',
          borderColor: 'neutral.700',
          height: { xs: '300px', sm: '600px' },
          justifyContent: 'flex-end',
          borderRadius: 0,
        }}
      >
        <CardCover>
          <img src={product.img[0]} alt={product.name} loading="lazy" />
        </CardCover>

        <CardOverflow
          variant="solid"
          sx={{ bgcolor: 'primary.darkBlue', py: 1 }}
        >
          <Typography level="body-sm">{product.name}</Typography>
          <Typography level="body-sm">{product.price} €</Typography>
        </CardOverflow>
      </Card>
    </Link>
  );
};
