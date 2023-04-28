const DoctorFilterForm = ({
    filter,
    updateFilter
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData);

        if (obj.all !== undefined) {
            updateFilter({
                hasFilter: false,
                specialities: {},
            });
            return;
        } else {
            updateFilter(state => {
                return {
                    ...state,
                    hasFilter: true,
                    specialities: Object.keys(obj).reduce((acc, key) => {
                        acc[key] = true
                        return acc;
                    }, {})
                }
            })
        }


        // const specialities. = [];
        // for (let pair of formData.entries()) {
        //     if (pair[0] === 'all') {
        //         updateFilter({
        //             hasFilter: false,
        //             speciality: [],
        //         });
        //         return;
        //     }
        //     if (pair[1] === 'on') {
        //         specialities..push(pair[0]);
        //     }
        // }
        // updateFilter({
        //     hasFilter: true,
        //     specialities.,
        // });

    }


    return (
        <form className="filter__form" onSubmit={handleSubmit}>
            <div className="form__div__column">
                <label className="form__label" for="filter">Filter By: </label>
                <label className='label-inline'>All<input name="all" type="checkbox" value="all" /></label>
                <label className='label-inline'>Psychologic<input name="psychologic" type="checkbox" defaultChecked={filter.specialities.psychologic} /></label>
                <label className='label-inline'>Cardiologic<input name="cardiologic" type="checkbox" /></label>
                <label className='label-inline'>Dermatologic<input name="dermatologic" type="checkbox"
                    value="dermatologic" /></label>
                <label className='label-inline'>Gynecologic<input name="gynecologic" type="checkbox" value="gynecologic" /></label>
                <label className='label-inline'>Neurologic<input name="neurologic" type="checkbox" value="neurologic" /></label>
                <label className='label-inline'>Oncologic<input name="oncologic" type="checkbox" value="oncologic" /></label>
                <label className='label-inline'>Ophthalmologic<input name="ophthalmologic" type="checkbox"
                    value="ophthalmologic" /></label>
                <label className='label-inline'>Pediatric<input name="pediatric" type="checkbox" value="pediatric" /></label>
                <label className='label-inline'>Urologic<input name="urologic" type="checkbox" value="urologic" /></label>
            </div>
            <input className="form__btn" type="submit" value="Search" />
        </form>
    )
}

export default DoctorFilterForm;