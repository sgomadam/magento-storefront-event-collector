/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { StorefrontInstance } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";

const createContext = (storefront?: StorefrontInstance): StorefrontContext => {
    const storefrontCtx = storefront ?? mse.context.getStorefrontInstance();

    const context: StorefrontContext = {
        schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
        data: {
            baseCurrencyCode: storefrontCtx.baseCurrencyCode,
            environment: storefrontCtx.environment,
            environmentId: storefrontCtx.environmentId,
            instanceId: storefrontCtx.instanceId,
            storeCode: storefrontCtx.storeCode,
            storeId: storefrontCtx.storeId,
            storeName: storefrontCtx.storeName,
            storeUrl: storefrontCtx.storeUrl,
            storeViewCode: storefrontCtx.storeViewCode,
            storeViewCurrencyCode: storefrontCtx.storeViewCurrencyCode,
            storeViewId: storefrontCtx.storeViewId,
            storeViewName: storefrontCtx.storeViewName,
            websiteCode: storefrontCtx.websiteCode,
            websiteName: storefrontCtx.websiteName,
            websiteId: storefrontCtx.websiteId,
        },
    };

    return context;
};

export default createContext;
