# react project

# package 
- Transitive Dependency 

# parcel
- Dev Build
- Local Server
- HMR - Hot module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- minification
- Bundling
- compress
- consistent Hashing
- Code splitting
- Differential Bundling - Older browser
- HTTPs
- Tree Shaking - remove unused code
- Different dev and Prod Bundles

# food ordering all 
/***
 * Header
 *  - Logo
 *  - Nav
 * RestroContainer
 *  - search
 *  - RestaurantCard
 *      - Img
 *      - nameof Res, star rating, 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 There two type export and import
 Default import - 
 export default <name of component>;
 import <name of component> from "path";

export const <name of component>;
 import {<name of component>} from "path";

 # react Hooks
 (Normal js utility functions);
 - useState() - whenever state varible change / update React rerender the component
 - useEffect()

 Reconciliation Algorithm ( React fiber )
Vertul DOM is represtation actual DOM 

microservics architectuer

Whenever state Varibles update react triggers a reconciliation cycle ( rerendor the component)


# if no dependency then useEffect call everytime rerender
# if there is dependency with [] -> useEffect cal only once
# If there is dependency with [someprop] -> useEffect call everytime someprop updated.


# 2 