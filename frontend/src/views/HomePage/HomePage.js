import React from "react";
import {
  Typography,
  Button,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import api from "../../api";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //khai bao cac gia tri thay doi trong nay
      listProducts: [],
      total: 100,
      params: {
        size: 5,
        page: 1,
      },
    };
  }
  fetchData = async () => {
    const res = await api.product.getAllProduct({
      page: this.state.page,
      size: this.state.size,
    });
    console.log(res);
    if (res.status) {
      this.setState({
        listProducts: res.data.data,
        total: res.data.metadata.total,
      });
    } else {
      console.log(res.message);
      this.props.enqueueSnackbar(res.message, { variant: "error" });
    }
  };

  backPage = async () => {
    if (this.state.params.page > 1) {
      console.log(this.state);
      await this.setState({
        ...this.state,
        params: {
          ...this.state.params,
          page: this.state.params.page - 1,
        },
      });
      console.log(this.state);
      await this.fetchData();
    } else {
      alert("First page is already");
    }
  };

  nextPage = async () => {
    if (
      this.state.params.page <
      Math.ceil(this.state.total / this.state.params.size)
    ) {
      console.log(this.state);
      await this.setState({
        ...this.state,
        params: {
          ...this.state.params,
          page: this.state.params.page + 1,
        },
      });
      console.log(this.state);
      await this.fetchData();
    } else {
      alert("Pages run out");
    }
  };
  hamRenderProduct = (product) => {
    return (
      <Card>
        <CardHeader
          title={product.display}
          style={{ backgroundColor: "#bcaaa4" }}
        ></CardHeader>
        <Divider></Divider>
        <CardContent>
          <Typography>{product.description}</Typography>
        </CardContent>
        <Divider></Divider>
        <CardActions>
          <img src={product.imageUrl}></img>
        </CardActions>
        <Divider></Divider>
        <CardActions>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => this.renderData()}
          >
            Chi tiet{" "}
          </Button>
        </CardActions>
        <CardContent>
          {this.state.showDescripton ? (
            <Typography>{product.description}</Typography>
          ) : null}
        </CardContent>
      </Card>
    );
  };
  render() {
    return (
      <div>
        <Typography>Total: {this.state.total}</Typography>
        <Typography>Page: {this.state.page}</Typography>
        <Typography>Size: {this.state.size}</Typography>
        <Typography>
          paging: {this.state.page} -{" "}
          {Math.ceil(this.state.total / this.state.size)}{" "}
        </Typography>
        <Button onClick={this.backPage}>prev</Button>
        <Button onClick={this.nextPage}>next</Button>
        {this.state.listProducts.map((product) => {
          return (
            <Card>
              <CardContent> {this.hamRenderProduct(product)} </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    await this.fetchData();
  }
}
export default HomePage;
// export default MyComponent;
//= module.exports = App;
