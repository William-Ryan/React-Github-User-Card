import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'grey'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FollowerCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.followerData.login}
        </Typography>
        <Typography variant="h5" component="h2">
            Repos: {props.followerData.repos_url}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Followers: {props.followerData.followers_url}
        </Typography>
      </CardContent>
    </Card>
  );
}

// const FollowerCard = props => {
//     return (
//         <div>
//             <h2>{props.followerData.login}</h2>
//             <h3>Repos: {props.followerData.repos_url}</h3>
//             <h3>Followers: {props.followerData.followers_url}</h3>
//         </div>
//     )
// }
// export default FollowerCard; 