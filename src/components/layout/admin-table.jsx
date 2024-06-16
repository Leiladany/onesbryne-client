import './admin-table.css';
import { Button, Chip, Table } from '@mui/joy';
import { MdEdit, MdDelete } from 'react-icons/md';

export const AdminTable = ({ products, onEdit, onDelete }) => {
  return (
    <Table
      borderAxis="bothBetween"
      color="neutral"
      size="sm"
      stickyHeader
      variant="plain"
      className="admin-table"
      sx={{
        width: '100%',
        borderCollapse: 'collapse',
        '& th': {
          textAlign: 'center',
          backgroundColor: 'primary.darkBlue',
        },
        '& tr': {
          color: 'neutral.400',
        },
        '& th:nth-of-type(6), & td:nth-of-type(6)': {
          display: { xs: 'none', lg: 'table-cell' },
        },
      }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Imagem</th>
          <th>Tamanho</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>
              {product.img ? (
                <img
                  src={product.img[0]}
                  alt={product.name}
                  style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                />
              ) : null}
            </td>
            <td>{product.size}</td>
            <td>{product.price} €</td>
            <td>{product.description}</td>
            <td>{product.type}</td>
            <td>
              {product.status === 'Disponível' && (
                <Chip color="success">{product.status}</Chip>
              )}
              {product.status === 'Arquivado' && (
                <Chip color="neutral">{product.status}</Chip>
              )}
              {product.status === 'Vendido' && (
                <Chip color="danger">{product.status}</Chip>
              )}
            </td>
            <td>
              <Button
                onClick={() => onEdit(product.id)}
                sx={{
                  p: 1,
                  borderRadius: '50%',
                }}
              >
                <MdEdit size={20} color="white" />
              </Button>
            </td>
            <td>
              <Button
                onClick={() => onDelete(product.id)}
                sx={{
                  p: 1,
                  borderRadius: '50%',
                }}
              >
                <MdDelete size={20} color="white" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
