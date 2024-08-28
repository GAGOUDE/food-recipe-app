import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import "./RecipeCard.css"

export default function RecipeCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 350 }} className="card_container">
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={recipe["recipe"]["image"]}
          alt={recipe["recipe"]["label"]}
        />
        <CardContent className='card_content'>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            style={{ fontWeight: 'bold' }}
          >
            {recipe["recipe"]["label"]}
          </Typography>
          <Typography variant="body2" color="text.dark">
            Calories : <Chip label={Number(recipe["recipe"]["calories"]).toFixed(2)} />
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions className='card_btn_container'>
        <Button
          size="small"
          variant='outlined'
          className='card_btn_viewRecipe'
          onClick={() => {
            window.open(recipe["recipe"]["url"]);
          }}
        >
          View Recipe
        </Button>
      </CardActions>
    </Card>
  );
}
