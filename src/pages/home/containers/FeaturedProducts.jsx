import { connect } from 'react-redux';
import { fetchFeaturedProducts } from '../../../redux/actions/feautured-products/featuredProducts';
import FeaturedProducts from '../components/featured-products/FeaturedProducts';

const mapStateToProps = (state) => {
  return {
    featuredProducts: state.featuredProducts.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeaturedProducts: (url) => dispatch(fetchFeaturedProducts(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts);
