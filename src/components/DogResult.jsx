import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class DogResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    if (this.props.isShowing) {
      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/doggo.jpg"
              title="beautiful pup"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.dog}
              </Typography>
              <Typography component="p" className="display-dog">
                Additional Info Here!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
    } else {
      return null;
    }
  }
}

DogResult.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DogResult);
