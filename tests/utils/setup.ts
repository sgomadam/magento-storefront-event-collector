import "@adobe/adobe-client-data-layer";

import mse from "@adobe/magento-storefront-events-sdk";

import {
    mockCategory,
    mockExtension,
    mockOrder,
    mockPage,
    mockProduct,
    mockRecommendations,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
} from "./mocks/dataLayer";

jest.mock("@snowplow/browser-tracker");

mse.context.setCategory(mockCategory);
mse.context.setMagentoExtension(mockExtension);
mse.context.setOrder(mockOrder);
mse.context.setPage(mockPage);
mse.context.setProduct(mockProduct);
mse.context.setRecommendations(mockRecommendations);
mse.context.setSearchInput(mockSearchInput);
mse.context.setSearchResults(mockSearchResults);
mse.context.setShopper(mockShopper);
mse.context.setShoppingCart(mockShoppingCart);
mse.context.setStorefrontInstance(mockStorefront);
