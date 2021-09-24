import { connect } from 'react-redux';
import { fetchNewProduct } from '../../../redux/actions/newProduct';
import NewProduct from '../components/new-product/NewProduct';

const mapStateToProps = (state) => {
  return {
    newProduct: state.newProduct.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewProduct: (url) => dispatch(fetchNewProduct(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
