import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const CardItem = ({ name, id, image, status, location, gender }) => {
  return (
    <Card sx={{ minWidth: 345 }} style={{ margin: '20px 0px' }}>
      <CardMedia component="img" alt={name} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Status:</b> {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Location:</b> {location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Gender:</b> {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Origin:</b> {origin.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Typography>♡</Typography>
        </Button>
        <Button size="small">
          <NavLink to={`/character/${id}`}>See more</NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
