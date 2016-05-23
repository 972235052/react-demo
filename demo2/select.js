var Divselect = React.createClass({
		getInitialState:function(){
			return {
				active:false,
				_value:'默认'
			}
		},
		getClick:function(ev){
			this.state.active ? this.setState({active:false}) :  this.setState({active:true});

		},
		handelClick:function(value){
			this.setState({_value:value})
		},
		render:function(){
			var act = this.state.active ? 'fe-dpl-select open' : 'fe-dpl-select';
			return(<div className={act} ref="select" onClick={this.getClick}>
						<div className="inputWrapper">
							<input type="text"  className="fe-dpl-input" placeholder="默认" value={this.state._value} readonly="readonly" />
							<i className="fe-dpl-icon i-arrow-down"></i>
						</div>

						<div className="listAndActions">
							<List data={this.props.data} cl={this.handelClick}></List>
						</div>
					</div>)
		}
	}),
	List = React.createClass({
		render:function(){
			var handClick = this.props.cl;
			 var LiArry = this.props.data.map(function(t,i){
				 return (<Li key={i} data={t} cl={handClick} />)
			 });
			return (<ol>
						{LiArry}
					</ol>)
		}
	}),
	Li = React.createClass({
		zClick:function(ev){
			this.props.cl(ev.target.innerHTML);
		},
		render : function(){
			return (<li onClick={this.zClick}>{this.props.data.value}</li>)
		}
	});