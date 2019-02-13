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
import dogData from "../../data/dogs";
import ResetButton from "../components/ResetButton";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 190
  }
};

class DogResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { classes } = this.props;
    if (this.props.isShowing) {
      return (
        <div className="dog-result">
          <h2>Thanks human... based on your input your new best friend is:</h2>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={this.props.dog.image_url}
                title="Regal Doggo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.dog.breed}
                </Typography>
                <Typography component="p" className="display-dog">
                  Origin: {this.props.dog.origin}
                </Typography>
                <Typography component="p" className="display-dog">
                  {this.props.dog.info}
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
              <ResetButton />
            </CardActions>
          </Card>
        </div>
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
