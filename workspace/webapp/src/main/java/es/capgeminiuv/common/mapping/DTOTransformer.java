package es.capgeminiuv.common.mapping;

import org.apache.commons.collections.Transformer;

@SuppressWarnings({ "unchecked", "rawtypes" })
public class DTOTransformer implements Transformer {

	private Class clazz;

	public DTOTransformer() {
	}

	public DTOTransformer(Class clazz) {
		this.clazz = clazz;
	}

	@Override
	public Object transform(Object input) {
		try {
			return BeanUtils.copyProperties(input, clazz == null ? input.getClass() : clazz);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}