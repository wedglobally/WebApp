
        import SoftBox from 'components/SoftBox';
import WGSearchComponent from 'components/WGAutoComplete';
import React from 'react'
import PaginatedProfileList from '../PaginatedProfileList';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
      
      
        export default function MySearches() {
            window.onscroll = function (e) {
                const nav = document.querySelector('.navbar')
                // if (window.scrollY > 0) {
                //     nav.classList.add('affix');
                // }
                // if (window.scrollY === 0) {
                //     nav.classList.remove('affix')
                // }
            };
            return (
                <>
                <DashboardLayout>
                <SoftBox>
              <SoftBox mb={3} alignItems="left">
                <WGSearchComponent />
              </SoftBox>
              <SoftBox mb={3}>
                <PaginatedProfileList />
              </SoftBox>
            </SoftBox>
            </DashboardLayout>
                </>
            )
        };
        