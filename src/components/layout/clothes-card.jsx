import { Link } from 'react-router-dom';
import {
  Card,
  CardCover,
  CardOverflow,
  Typography,
} from '@mui/joy';

export const ClothesCard = ({ product }) => {
  return (
    <Link to={`/clothes/${product.type.toLowerCase()}/${product.id}`}>
      <Card
        sx={{
          background: 'transparent',
          borderColor: 'neutral.700',
          width: { md: '400px' },
          height: '600px',
          justifyContent: 'flex-end',
        }}
      >
        <CardCover>
          <img src={product.img[0]} alt={product.name} loading="lazy" />
        </CardCover>

        <CardOverflow variant="solid" sx={{ bgcolor: 'primary.maint', py: 2 }}>
          <Typography level="body-md">{product.name}</Typography>
          <Typography level="body-md">{product.price} €</Typography>
        </CardOverflow>
      </Card>
    </Link>
  );
};
