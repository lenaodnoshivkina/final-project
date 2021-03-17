import React, {Component} from 'react';
import {setCurrentPage} from '../../actions/';
import {connect} from 'react-redux';
import  WithPokedoxService from '../hoc';
import './pagination.scss';

class Pagination extends Component {
    render(){

        let pages = [];
        const start = "<";
        const end = ">";
        const endPage = Math.trunc(totalCount / perPage) + 1;

        const {currentPage, perPage, totalCount, availablePages, setCurrentPage} = this.props;

        if (currentPage < 3){
            for (let i = 1; i < (1 + availablePages); i++){
                pages.push(i);
            }
        }else{
            if (currentPage > (endPage - 2)){
                for (let i = (endPage - 4); i < (endPage + 1); i++){
                    pages.push(i);
                }
            }else{
                for (let i = currentPage - 2; i < currentPage +3; i++){
                    pages.push(i);
                }
            }
        }

        return (
            <>
                <div className="pagination">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(1)
                        }}
                    >{start}</a>
                    {pages.map((page, index) => 
                        <a 
                            key={index} 
                            className={currentPage == page? "active" : ""} 
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page)
                            }}>
                                {page}
                        </a>)}
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(endPage)

                        }}
                    >{end}</a>
                </div>
            </>
        )}
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        perPage: state.perPage,
        totalCount: state.totalCount,
        availablePages: state.availablePages
    }
}

const mapDispatchToProps = {
    setCurrentPage
};

export default WithPokedoxService()(connect(mapStateToProps, mapDispatchToProps)(Pagination))