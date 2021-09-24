import { connect } from 'react-redux';
import { fetchProductCardList } from '../../../../redux/actions/product-card-list/productCardList';
import ProductCardList from '../../components/product-card-list/ProductCardList';

const mapStateToProps = (state) => {
  return {
    productList: state.productList.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductCardList: (url) => dispatch(fetchProductCardList(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardList);
